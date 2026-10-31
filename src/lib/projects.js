import { getCollection } from "astro:content";

// 목록 순서(order)대로 정렬된 프로젝트
export async function getProjects() {
  return (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
}

// 시작한 날짜순 (경력 타임라인)
export async function getTimeline() {
  return (await getCollection("projects")).sort((a, b) => a.data.started - b.data.started);
}

export const month = (d) => `${d.getUTCFullYear()}년 ${d.getUTCMonth() + 1}월`;
export const fullDate = (d) => `${month(d)} ${d.getUTCDate()}일`;
