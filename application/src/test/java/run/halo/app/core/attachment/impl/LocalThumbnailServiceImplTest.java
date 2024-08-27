package run.halo.app.core.attachment.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.nio.file.Path;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;
import run.halo.app.core.attachment.AttachmentRootGetter;
import run.halo.app.core.attachment.ThumbnailSize;
import run.halo.app.core.extension.attachment.LocalThumbnail;
import run.halo.app.extension.ListResult;
import run.halo.app.extension.PageRequest;
import run.halo.app.extension.ReactiveExtensionClient;
import run.halo.app.infra.ExternalUrlSupplier;

/**
 * Tests for {@link LocalThumbnailServiceImpl}.
 *
 * @author guqing
 * @since 2.19.0
 */
@ExtendWith(MockitoExtension.class)
class LocalThumbnailServiceImplTest {

    @Mock
    private AttachmentRootGetter attachmentWorkDirGetter;

    @Mock
    private ExternalUrlSupplier externalUrlSupplier;

    @Mock
    private ReactiveExtensionClient client;

    @InjectMocks
    private LocalThumbnailServiceImpl localThumbnailService;

    @Test
    void endpointForTest() {
        var endpoint =
            localThumbnailService.buildThumbnailUri("2024", ThumbnailSize.L, "example.jpg");
        assertThat(endpoint).isEqualTo("/upload/thumbnails/2024/w1200/example.jpg");
    }

    @Test
    void geImageFileNameTest() throws MalformedURLException {
        var fileName =
            LocalThumbnailServiceImpl.geImageFileName(new URL("https://halo.run/example.jpg"));
        assertThat(fileName).isEqualTo("example.jpg");

        fileName = LocalThumbnailServiceImpl.geImageFileName(new URL("https://halo.run/"));
        assertThat(fileName).isNotBlank();

        fileName = LocalThumbnailServiceImpl.geImageFileName(
            new URL("https://halo.run/.1fasfg(*&^%$.jpg"));
        assertThat(fileName).isNotBlank();
    }

    @Test
    void appendRandomSuffixTest() {
        var result = LocalThumbnailServiceImpl.appendRandomSuffix("example.jpg");
        assertThat(result).isNotEqualTo("example.jpg");
        assertThat(result).endsWith(".jpg");
        assertThat(result).startsWith("example_");
    }

    @Test
    void toFilePathTest() {
        when(attachmentWorkDirGetter.get()).thenReturn(Path.of("/tmp"));
        var path = localThumbnailService.toFilePath("/thumbnails/2024/w1200/example.jpg");
        assertThat(path).isEqualTo(Path.of("/tmp/thumbnails/2024/w1200/example.jpg"));
    }

    @Test
    void signatureForImageUriTest() throws MalformedURLException {
        when(externalUrlSupplier.getRaw()).thenReturn(new URL("http://localhost:8090"));
        var signature = signatureForImageUriStr("http://localhost:8090/example.jpg");
        assertThat(signature).isEqualTo(LocalThumbnail.signatureFor("/example.jpg"));

        signature = signatureForImageUriStr("http://localhost:8090/example.jpg");
        assertThat(signature).isEqualTo(LocalThumbnail.signatureFor("/example.jpg"));

        signature = signatureForImageUriStr("http://localhost:8091/example.jpg");
        assertThat(signature).isEqualTo(
            LocalThumbnail.signatureFor("http://localhost:8091/example.jpg"));

        signature = signatureForImageUriStr("localhost:8090/example.jpg");
        assertThat(signature).isEqualTo(
            LocalThumbnail.signatureFor("localhost:8090/example.jpg"));

        when(externalUrlSupplier.getRaw()).thenReturn(null);
        signature = signatureForImageUriStr("http://localhost:8090/example.jpg");
        assertThat(signature).isEqualTo(
            LocalThumbnail.signatureFor("http://localhost:8090/example.jpg"));
    }

    String signatureForImageUriStr(String uriStr) {
        return localThumbnailService.signatureForImageUri(URI.create(uriStr));
    }

    @Test
    void generateUniqueThumbFileNameTest() {
        var count = new AtomicInteger(0);
        when(client.listBy(eq(LocalThumbnail.class), any(), isA(PageRequest.class)))
            .thenAnswer(invocation -> {
                if (count.get() > 2) {
                    return Mono.just(ListResult.emptyResult());
                }
                count.incrementAndGet();
                var result = new ListResult<>(List.of(new LocalThumbnail()));
                return Mono.just(result);
            });

        localThumbnailService.generateUniqueThumbFileName("example.jpg", "2024", ThumbnailSize.L)
            .as(StepVerifier::create)
            .consumeNextWith(fileName -> {
                assertThat(fileName).startsWith("example_");
                assertThat(fileName).endsWith(".jpg");
                // 6 is the length of the random suffix
                assertThat(fileName.length()).isEqualTo("example_.jpg".length() + 6);
            })
            .verifyComplete();

        verify(client, times(4)).listBy(eq(LocalThumbnail.class), any(), isA(PageRequest.class));
    }
}
