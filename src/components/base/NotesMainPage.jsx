import React, { useEffect, useMemo, useState } from "react";
import NotesSidebar from "@/components/tech/notes-layout/NotesSidebar";
import NotesChips from "@/components/tech/notes-layout/NotesChips";
import NotesContentTopBar from "@/components/tech/notes-layout/NotesContentTopBar";
import NotesContent from "@/components/tech/notes-layout/NotesContent";
import {
  estimateReadingTime,
  generateSlug,
  reverseSlug,
  scrollToTop,
} from "@/utils/functions";
import ls from "local-storage";
import BlogMetaInfo from "@/components/tech/notes-layout/BlogMetaInfo";
import { useRouter } from "next/router";
import Head from "next/head";
import Button from "./Button";
import Image from "next/image";
import { CONNECT_LINK_TOPMATE } from "@/utils/constant";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const NotesMainPage = ({
  contentList = [],
  storageKey,
  metaInfo,
  contentListTitle,
  pageTitle,
  eachCardPrefix,
  msxSource,
  currentPageFrontMatter,
  contentListLength,
  subDomain='namaste-node-js'
}) => {
  const router = useRouter();
  const [episodes, _setEpisodes] = useState(contentList);
  const [selectedSection, setSelectedSection] = useState(
    currentPageFrontMatter
  );
  const [markdownContent, _setMarkdownContent] = useState(`### Please Wait...`);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isQuickReadModeOn, setIsQuickReadModeOn] = useState(false);
  const [progress, setProgress] = useState(0);

  const STORAGE_KEY = storageKey;
  const handleSectionClick = (section) => {
    const slug = generateSlug(section?.title);
    router.push(`/digital-garden/notes/${subDomain}/` + slug);
    const storageValue = ls.get(STORAGE_KEY);
    const updatedStorage = {
      ...storageValue,
      [section.name]: true,
    };
    ls.set(STORAGE_KEY, updatedStorage);
    scrollToTop();
  };

  function countTrueValues() {
    const storageValue = ls.get(STORAGE_KEY);
    return storageValue
      ? Object.values(storageValue).filter((value) => value === true).length
      : 0;

    
  }

  // for changing file path just removing public , because its not required
  function changeFilePath(filePath) {
    const newFilePath = filePath.replace("/public", "");
    return newFilePath;
  }

  useEffect(() => {
    const totalCount = contentListLength;
    const trueCount = countTrueValues();
    const percentage = Math.round((trueCount / totalCount) * 100);
    const res = percentage == 100 ? 100 : percentage.toFixed(2);
    setProgress(res);
  }, [currentPageFrontMatter]);

  // Todo: Not working needs to be fixed
  useEffect(() => {
    const { slug } = router.query;
    const matchedEpisode = contentList?.findIndex((episode) => {
      return episode?.title?.toLowerCase() == reverseSlug(slug);
    });
    setSelectedSection(matchedEpisode || contentList[1]);
  }, []);

  const savedStorage = ls.get(STORAGE_KEY);

  // format publish date
  const formattedDate = dayjs(
    currentPageFrontMatter?.publishedOn,
    "DD-MM-YYYY"
  ).format("DD MMM, YYYY");

  return (
    <>
      <Head>
        <title>
          {currentPageFrontMatter?.name} : {pageTitle}{" "}
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {metaInfo?.map((info) => {
          return (
            <meta key={info.name} name={info.name} content={info.content} />
          );
        })}
      </Head>

      <div className="max-w-screen-xl">
        <NotesChips
          data={contentList}
          handleChipClick={handleSectionClick}
          progress={progress}
          storedValues={savedStorage}
          value={episodes[0]}
          contentListTitle={contentListTitle}
        />

        <div className="flex h-[93vh] gap-10">
          {isSidebarVisible && (
            <NotesSidebar
              data={contentList}
              onSectionClick={handleSectionClick}
              progress={progress}
              selectedSection={currentPageFrontMatter}
              storedValues={ls.get(STORAGE_KEY)}
              eachCardPrefix={eachCardPrefix}
              contentListTitle={contentListTitle}
            />
          )}
          <div
            className={`lg:w-3/4 w-full lg:ml-[340px] ml-0   flex flex-col   h-full     rounded-lg   ${
              isSidebarVisible ? "w-3/4" : "w-full"
            }`}
          >
            <NotesContentTopBar
              isSidebarVisible={isSidebarVisible}
              setIsSidebarVisible={setIsSidebarVisible}
              isQuickReadModeOn={isQuickReadModeOn}
              setIsQuickReadModeOn={setIsQuickReadModeOn}
              title={
                currentPageFrontMatter?.name || currentPageFrontMatter?.title
              }
            />

            <div className="flex-1   ">
              <div className="">
                <BlogMetaInfo
                  large
                  data={{
                    timeRead: estimateReadingTime(markdownContent),
                    publishedOn: formattedDate,
                    name: currentPageFrontMatter?.author || "Anonymous user",
                    title:
                      currentPageFrontMatter?.name ||
                      currentPageFrontMatter?.title,
                    isQuickReadModeOn: isQuickReadModeOn,
                    setIsQuickReadModeOn: setIsQuickReadModeOn,
                  }}
                />
              </div>

              {currentPageFrontMatter?.thumbnail && (
                <img
                  className="my-6 rounded-md shadow-md"
                  alt={currentPageFrontMatter?.title}
                  src={
                    currentPageFrontMatter?.thumbnail?.includes("https")
                      ? currentPageFrontMatter?.thumbnail
                      : changeFilePath(currentPageFrontMatter?.thumbnail)
                  }
                  width="1024"
                  height={"300"}
                />
              )}

              {isQuickReadModeOn ? (
                <div className="flex flex-col gap-4 justify-center items-center mt-10  font-semibold">
                  <h2 className="text-2xl">I am writing this feature !!!</h2>
                  <Button
                    onClick={() => {
                      window.open(CONNECT_LINK_TOPMATE, "_blank");
                    }}
                    className=""
                  >
                    Let's write together
                  </Button>
                </div>
              ) : (
                <NotesContent markdownContent={msxSource} large />
              )}
            </div>

            {/* <NotesContentFooter data={episodes} selectedSection={selectedSection} onSectionClick={handleSectionClick} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default NotesMainPage;
