import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import speakerListStyles from './index.module.sass';

import MediumListItem from '@/components/molecules/medium-list-item';
import SmallSectionHeading from '@/components/atoms/small-section-heading';

import speakers from '@/data/key-speakers.json'

const KeySpeakersList = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const handleSpeakerHover = (speaker) => {
        setSelectedSpeaker(speaker);
    };

    return (
        <section>
            <SmallSectionHeading heading='Key Speakers' />
            <div className={`${'span-whole-grid'} ${speakerListStyles['speaker-list-holder']}`}>
                <figure className={`${speakerListStyles['speaker-list-image-holder']}`} >
                    <Image src={selectedSpeaker ? selectedSpeaker.imgSrc : '/images/speaker-placeholder.png'} alt={selectedSpeaker ? selectedSpeaker.altText : 'A man speaking on stage at a conference'} width={515} height={515} style={{ bottom: selectedSpeaker ? `5rem` : `` }} />
                    {selectedSpeaker &&
                        <figcaption className={`${speakerListStyles['speaker-name']}`}>
                            <h4>Session</h4>
                            <p>{selectedSpeaker.session}</p>
                        </figcaption>
                    }
                </figure>

                {/* List of speakers */}
                <ul className={`${speakerListStyles['speaker-list']}`}>
                    {speakers.map((speaker) => (
                        <MediumListItem
                            key={speaker.id}
                            headingText={speaker.speaker}
                            onMouseEnter={() => handleSpeakerHover(speaker)}
                            onMouseLeave={() => handleSpeakerHover(null)}
                        ></MediumListItem>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default KeySpeakersList;