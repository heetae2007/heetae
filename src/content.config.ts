import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 프로젝트 하나 = src/content/projects 안의 Markdown 파일 하나
const screen = z.enum(["telegram", "board", "sheet", "notion", "zendesk", "v1", "github", "poll"]);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    short: z.string(),                 // 경력 포스터에 쓰는 짧은 이름
    order: z.number(),                 // 목록에서의 순서 (작을수록 위)
    started: z.coerce.date(),
    language: z.string(),              // 매물 줄에 보이는 언어
    stack: z.array(z.string()),
    status: z.string(),                // 무료나눔, 만드는 중, 지금 보는 곳 …
    summary: z.string(),               // 목록에 보이는 한 줄 설명
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    screen,                            // 프로젝트 페이지의 화면 조각
    cover: screen.optional(),          // 목록(처음 화면)에 쓰는 화면, 없으면 screen
    career: z.object({
      note: z.string(),
      screen: screen.optional(),
    }),
    parts: z.array(z.object({          // 프로젝트 페이지의 보조 행
      title: z.string(),
      meta: z.string().optional(),
      body: z.string(),
      facts: z.array(z.string()).default([]),
      screen,
      tags: z.array(z.string()).default([]),
    })).default([]),
  }),
});

export const collections = { projects };
