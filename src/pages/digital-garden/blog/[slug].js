import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import BlogMetaInfo from "@/components/tech/notes-layout/BlogMetaInfo";
import { estimateReadingTime, removePublicFromPath } from "@/utils/functions";
import { DEFAULT_AVATAR, DEFAULT_FOLLOW_LINK } from "@/utils/constant";
import dayjs from "dayjs";
import Image from "next/image";
import MDXRenderer from "@/components/base/MDXRenderer";
import CommonSlugHeadTags from "@/components/seo/CommonSlugHeadTags";

// Function to fetch the content of the blog post
export async function getStaticProps({ params }) {
const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "blog",
    `${params.slug}.md`
  );
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      mdxSource,
    },
  };
}

// Function to fetch all blog slugs
export async function getStaticPaths() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src", "content", "blog")
  );

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Component to render the blog post
export default function BlogPost({ frontMatter, mdxSource, large = false }) {
  const formattedDate = dayjs(frontMatter?.date, "DD-MM-YYYY").format(
    "DD MMM, YYYY"
  );
  function changeFilePath(filePath) {
    const newFilePath = filePath.replace("/public", "");
    return newFilePath;
  }

  const components = {
    img: ({ src, alt, ...rest }) => {
      // Adjust the path using the utility function
      const adjustedSrc = removePublicFromPath(src);
      return <img src={adjustedSrc} alt={alt} layout="responsive" {...rest} />;
    },
  };

  return (
    <>
      <CommonSlugHeadTags  image="https://i.ibb.co/vP1f18c/boooks-logo.jpg"  title="Read Latest Blogs on Digital Garden of Ashutosh Anand Tiwari : heyashu.in"   url = "https://www.heyashu.com/blog" frontMatter={frontMatter} />

      <div
        className={`flex flex-col gap-2  max-w-screen-[1000px] m-auto ${
          large ? "max-w-screen-lg" : "max-w-screen-md"
        }`}
      >
        {/* Blog Title */}
        {frontMatter?.title && (
          <h3 className="md:text-5xl text-3xl text-[#130101] font-extrabold my-6 font-sans">
            {" "}
            {frontMatter?.name || frontMatter?.title}
          </h3>
        )}

        {/* Blog Meta Info */}
        <div className="mb-4">
          <BlogMetaInfo
            data={{
              name: frontMatter?.author,
              publishedOn: formattedDate,
              title: frontMatter?.title,
              timeRead: estimateReadingTime(mdxSource?.compiledSource),
              profilePic: frontMatter?.profilePic || DEFAULT_AVATAR,
              followLink: frontMatter?.followLink || DEFAULT_FOLLOW_LINK,
            }}
          />
        </div>
        {/* Blog Hero Image */}
        {frontMatter?.thumbnail && (
          <Image
            alt={frontMatter?.title}
            src={
              frontMatter?.thumbnail?.includes("https")
                ? frontMatter?.thumbnail
                : changeFilePath(frontMatter?.thumbnail)
            }
            width="1024"
            height={"300"}
            className="rounded-md shadow-lg"
          />
        )}
        {/* Main Blog Content */}
        <div
          className={`prose container mx-auto p-0  mb-28 ${
            large ? "max-w-screen-lg" : "max-w-screen-md"
          }`}
        >
          <MDXRenderer markdownContent={mdxSource} />
        </div>
      </div>
    </>
  );
}
