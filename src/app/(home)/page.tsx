/*import {SparklesPreview} from "./components/SparklesPreview"*/
import {TypewriterEffectSmoothDemo} from "./components/TypewriterEffectSmoothDemo"
import { TimelineDemo } from "./components/TimelineDemo";
import { LampDemo } from "@/components/ui/lamp";
export default function Home() {
  return (
    <div className="w-full m-0 p-0">
      <div className="m-0 p-0">
        <LampDemo />
      </div>
      <div className="m-0 p-0">
        <TypewriterEffectSmoothDemo />
      </div>
      <div className="m-0 p-0">
        <TimelineDemo />
      </div>
    </div>
  );
}
