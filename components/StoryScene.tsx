import { asset } from "@/lib/i18n/config";
import { posePath } from "@/lib/games/poses";
import type { SceneKey } from "@/lib/cerita/scene";

/**
 * Pure-CSS illustrated cover for a story card. The scene (sky, sun/moon,
 * clouds, hills, flowers, rain) is drawn with CSS in globals.css; this
 * component just lays out the decorative elements and the Baby Mo pose.
 * No images other than the transparent character pose.
 */
export function StoryScene({
  scene,
  pose,
  className = "",
}: {
  scene: SceneKey;
  pose: string;
  className?: string;
}) {
  return (
    <div className={`sc sc--${scene} ${className}`} aria-hidden>
      {/* Sky decor */}
      {scene === "night" ? (
        <>
          <span className="sc-moon" />
          <span className="sc-star" style={{ top: "18%", left: "22%" }} />
          <span className="sc-star" style={{ top: "30%", left: "60%" }} />
          <span className="sc-star sc-star--sm" style={{ top: "14%", left: "72%" }} />
          <span className="sc-star sc-star--sm" style={{ top: "44%", left: "34%" }} />
        </>
      ) : scene === "rain" ? (
        <>
          <span className="sc-cloud sc-cloud--a" />
          <span className="sc-cloud sc-cloud--b" />
          <span className="sc-drops">
            <i style={{ left: "20%", ["--d" as string]: "0s" }} />
            <i style={{ left: "38%", ["--d" as string]: ".5s" }} />
            <i style={{ left: "56%", ["--d" as string]: ".2s" }} />
            <i style={{ left: "74%", ["--d" as string]: ".7s" }} />
          </span>
        </>
      ) : (
        <>
          <span className="sc-sun" />
          <span className="sc-cloud sc-cloud--a" />
          <span className="sc-cloud sc-cloud--b" />
        </>
      )}

      {/* Ground */}
      {scene === "garden" ? (
        <>
          <span className="sc-ground sc-ground--grass" />
          <span className="sc-flower" style={{ left: "14%", ["--fc" as string]: "#F2849E" }} />
          <span className="sc-flower" style={{ left: "82%", ["--fc" as string]: "#F4C04E" }} />
        </>
      ) : scene === "cozy" ? (
        <span className="sc-ground sc-ground--floor" />
      ) : (
        <span className={`sc-hill ${scene === "night" ? "sc-hill--night" : ""}`} />
      )}

      <img
        className="sc-pose"
        src={asset(posePath(pose))}
        alt=""
        draggable={false}
        loading="lazy"
      />
    </div>
  );
}
