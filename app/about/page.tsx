import AboutImage from "@/components/aboutImage";
import AboutPara from "@/components/aboutPara";
import AboutParaDesc from "@/components/aboutParaDesc";

export default function aboutPage() {
    return (
        <div className="flex flex-col gap-4">
        <AboutImage />
        <AboutParaDesc/>
        <AboutPara/>
        </div>
    );
}
