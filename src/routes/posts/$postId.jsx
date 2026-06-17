import { createFileRoute } from '@tanstack/react-router';
import { WebsiteRedesignWithFigma } from '../../pages/posts/WebsiteRedesignWithFigma';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

const Articles = {
  "website-redesign-with-figma": <WebsiteRedesignWithFigma />,
}

function RouteComponent() {
  const { postId } = Route.useParams();
  const convertedPostId = postId.toLowerCase();
  const articlepage = Articles[convertedPostId];
  return articlepage ? articlepage : <h1 style={{ paddingTop: "200px", color: "white" }}>Page not found</h1>;
}
