import { Confidence, confidenceHelp, confidenceLabel } from "../data/content";

export default function Badge({ level }: { level: Confidence }) {
  return (
    <span className={`badge badge--${level}`} title={confidenceHelp[level]}>
      {confidenceLabel[level]}
    </span>
  );
}
