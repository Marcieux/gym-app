import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid"

import { motion } from "framer-motion"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> =  [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description:
        "Tristique risus nec feugiat in fermentum posuere. Elit duis tristique sollicitudin nibh sit amet. Gravida in fermentum et sollicitudin ac orci. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sit amet venenatis urna cursus eget nunc scelerisque. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. "
    },

    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description:
        "Vitae auctor eu augue ut lectus arcu bibendum at. Nisl suscipit adipiscing bibendum est ultricies integer. Pretium fusce id velit ut tortor pretium viverra suspendisse. Dui sapien eget mi proin sed libero. Scelerisque viverra mauris in aliquam sem fringilla ut morbi."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                    whileInView="visible"
                    viewport={{ once:true, amount:0.5 }}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}
            >
                <HText>
                    MORE THAN JUST A GYM.
                </HText>

                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. 
                    We provide true care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="mt-5 md:flex items-center justfiy-between gap-8 "
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img
                    className="mx-auto"
                    src={BenefitsPageGraphic} 
                    alt="benefits-page-graphic" 
                />
                
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once:true, amount:0.5 }}
                                transition={{ duration: 0.5}}
                                variants={{
                                    hidden: {opacity: 0, x:50},
                                    visible: {opacity: 1, x:0}
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once:true, amount:0.5 }}
                        transition={{ delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x:0}
                        }}
                    >
                        <p className="my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p className="mb-5">
                            Vitae auctor eu augue ut lectus arcu bibendum at. Nisl suscipit adipiscing bibendum est ultricies integer. Pretium fusce id velit ut tortor pretium viverra suspendisse. Dui sapien eget mi proin sed libero. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits