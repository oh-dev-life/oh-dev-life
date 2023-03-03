import Layout from "~/components/layout";
import Posts from "~/components/posts";
import VideoIntro from "~/components/posts/VideoIntro";

export default function Index() {
  return (
    <Layout>
      <VideoIntro />
      <Posts />
    </Layout>
  );
}
