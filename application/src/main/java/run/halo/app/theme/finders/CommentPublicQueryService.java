package run.halo.app.theme.finders;

import org.springframework.lang.Nullable;
import reactor.core.publisher.Mono;
import run.halo.app.core.extension.content.Comment;
import run.halo.app.core.extension.content.Reply;
import run.halo.app.extension.ListResult;
import run.halo.app.extension.Ref;
import run.halo.app.theme.finders.vo.CommentVo;
import run.halo.app.theme.finders.vo.ReplyVo;
import java.util.Comparator;

/**
 * @author LIlGG
 */
public interface CommentPublicQueryService {
    Mono<CommentVo> getByName(String name);

    Mono<ListResult<CommentVo>> list(Ref ref, @Nullable Integer page,
        @Nullable Integer size);

    Mono<ListResult<CommentVo>> list(Ref ref, @Nullable Integer page,
        @Nullable Integer size, Comparator<Comment> comparator);

    Mono<ListResult<ReplyVo>> listReply(String commentName, @Nullable Integer page,
        @Nullable Integer size);

    Mono<ListResult<ReplyVo>> listReply(String commentName, @Nullable Integer page,
        @Nullable Integer size, Comparator<Reply> comparator);
}