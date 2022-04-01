import { useState } from 'react';

import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

export type OverviewitemType = {
    Link: string;
    Onboarding: string;
    SupportedChains: string;
    SupportedEndPoints: string;
    LongTermPerspective: string;
    PersonalOpinion: string;
};

type props = {
    serviceName: string;
    data: OverviewitemType;
    isOpenDefaultValue?: boolean;
};

export default function IntroOverviewItem({
    serviceName,
    data,
    isOpenDefaultValue = false
}: props) {
    const [isOpen, setIsOpen] = useState<boolean>(isOpenDefaultValue);

    return (
        <div className="mt-2">
            <div className="flex flex-row justify-between">
                <div className="text-xl font-bold">
                    <a
                        href={data.Link}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {serviceName}
                    </a>
                </div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <HiChevronDown className="h-8 w-8" />
                    ) : (
                        <HiChevronUp className="h-8 w-8" />
                    )}
                </button>
            </div>
            <div
                className={`${isOpen == false ? 'hidden' : ''} overflow-hidden`}
            >
                <div className="mt-2">
                    <div className="underline">
                        <a
                            href={data.Link}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Link to Documentation
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="underline">Onboarding</div>
                    <div>{data.Onboarding}</div>
                </div>
                <div className="mt-2">
                    <div className="underline">Supported chains</div>
                    <div>{data.SupportedChains}</div>
                </div>
                <div className="mt-2">
                    <div className="underline">Supported end points</div>
                    <div>{data.SupportedEndPoints}</div>
                </div>
                <div className="mt-2">
                    <div className="underline">Long term perspective</div>
                    <div>{data.LongTermPerspective}</div>
                </div>
                <div className="mt-2">
                    <div className="underline">Personal opinion</div>
                    <div>{data.PersonalOpinion}</div>
                </div>
            </div>
            <hr />
        </div>
    );
}
