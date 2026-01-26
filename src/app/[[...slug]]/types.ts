import { DynamicPageProps } from "@/app/types";
import { DashType } from "@/features";

export type HomePageProps = DynamicPageProps<DashTypeSlug>;

export type DashTypeSlug = [dashType?: DashType];
