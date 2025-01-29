import Table from "@/components/Table";
import { MicrowaveTopics, NetworkingTopics, SignalProcessing, guidelines } from "./paperTopics";
import { Button } from "@/components/ui/button";
import Link from "next/link";



function page() {
    return (
        <div className="flex flex-col items-start justify-center w-3/4 mx-auto gap-6 py-10">

            <h1 className="importantDates text-4xl font-semibold">
                Call for papers
            </h1>
            <p className="text-left text-lg">
                We invite researchers, academicians, and industry experts to contribute to ICWiCOM 2025, a premier conference dedicated to advancing innovations in wireless communication and emerging technologies. Join us in shaping the future by sharing your groundbreaking research, novel ideas, and technical advancements with a global audience.
            </p>
            <br />
            <h1 className="text-3xl font-semibold">
                Important Dates
            </h1>
            <div className="flex items-start justify-center flex-col gap-2 text-lg">
                <div>
                    Paper Submission deadline: 1<sup>st</sup> May, 2025
                </div>
                <div>
                    Acceptance Notification: 30<sup>th</sup> June, 2025
                </div>
                <div>
                    Registration/Camera Ready Submission: 15<sup>th</sup> July, 2025
                </div>
            </div>
            <br />
            <h1 className="font-bold text-lg">Topics of interest for submission include, but are not limited to:</h1>
            <div className="flex gap-3 sm:flex-row flex-col flex-1">

                <Table heading={"Microwave Engineering"} topics={MicrowaveTopics} />
                <Table heading={"Wireless Communication/Networking"} topics={NetworkingTopics} />
                <Table heading={"Signal Processing"} topics={SignalProcessing} />

            </div>
            {/* add all of the templates here */}
            <br />
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">
                    Full Paper Submission Guidelines
                </h1>
                <p className="text-lg">
                    If you are interested to submit your full paper for inclusion in the ICWiCOM 2025 Book, you will need to follow the guidelines stated below:
                </p>
                <ul className="list-disc pl-5 text-lg">
                    {guidelines.map((item, index) => (
                        <li key={index} className="">{ item }</li>
                    ))}

                </ul>
            </div>
            <br />
            <div className="flex gap-3 flex-col text-lg">
                <h1>Template for Full Paper: <Link className="text-blue-500" href={"/splnproc1703_mac.docm"}>Full paper Template</Link></h1>
                <h1>Formatting for Full Paper is available: <Link className="text-blue-500" target="blank" href={"/ManuscriptguidelinesforEnglishbooks.pdf"}>manuscript-guidelines-1.0</Link> & <Link className="text-blue-500" target="blank" href={ "/Keystylepoints.pdf"}>Key_Style_Points_1.0.</Link></h1>
            </div>
            <br />
            <p className="text-lg">
                You can log in <span className="font-semibold">Microsoft's Conference Management Toolkit</span> using your Username and Password. From the top menu that appears below <span className="font-semibold">Author Console</span> Click "Create new submission" and choose the Track to submit the paper. Finally you fill out all the necessary information concerning the submission, upload the paper and click on "submit".
            </p>

            <div className="py-5 text-2xl font-semibold flex sm:flex-row flex-col justify-center gap-4">
                <h1>
                    Submit your papers here:
                </h1>
                <Link href={"https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICWiCOM2025"} target="blank">
                    <Button>Submit</Button>
                </Link>
            </div>

            <div className="text-xl">
                The Official Brochure of ICWiCOM 2025 is available: <Link className="text-blue-500" href={"/ICWiCOM 2025.pdf"} target="blank">Brochure</Link>
            </div>

        </div>
    )
}

export default page;

