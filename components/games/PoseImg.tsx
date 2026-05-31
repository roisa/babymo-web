import { asset } from "@/lib/i18n/config";
import { posePath } from "@/lib/games/poses";

/**
 * Presentational Baby Mo pose image. Plain <img> + asset() so it honours the
 * GitHub-Pages basePath in a static export. No hooks → usable from server or
 * client components.
 */
export function PoseImg({
  file,
  alt,
  flip = false,
  className,
  priority = false,
}: {
  file: string;
  alt: string;
  flip?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(posePath(file))}
      alt={alt}
      width={400}
      height={400}
      draggable={false}
      loading={priority ? "eager" : "lazy"}
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    />
  );
}
