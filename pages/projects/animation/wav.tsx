// pages/projects/animations/pervaya.tsx
import React, { useState, useEffect } from 'react';
import HeadUp from '../../../components/HeadUp';
import Loader from '../../../components/Loader';
import Windows from '../../../components/Window';
import MagazineFlipbook from '../../../components/MagazineFlipbook';


import styles from '../../../styles/projects/nolavdj.module.css';

const tools = [
    { src: '/mainpage/ui/blender.png', alt: 'Blender' },
    { src: '/mainpage/ui/zbrush.png', alt: 'ZBrush' },
    { src: '/mainpage/ui/maxon.png', alt: 'Maxon' },
    { src: '/mainpage/ui/ae.png', alt: 'After Effects' },
    { src: '/mainpage/ui/substance.png', alt: 'Substance Painter' },
    { src: '/mainpage/ui/ue.png', alt: 'Unreal Engine' },
];

export default function PerkayaStage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) return <Loader visible={true} />;

    return (
        <main className={styles.animationsMain}>
            <HeadUp />

            <div className={styles.windowContainer}>
                <Windows title="WAV" icons={tools}>

                    {/* Описание */}
                    <div className={`${styles.textSection} ${styles.sectionContent}`}>
                        <div className={styles.sectionTitle}>
                            <img
                                src="/mainpage/ui/folder.png"
                                alt="folder"
                                className={styles.folderIcon}
                            />WAV <span className={styles.labelAccent}>{'{all}'}</span>
                        </div>

                        <div className={styles.magazineSection}>
                            <h4 className={styles.magazineTitle}>Browse the Magazine:</h4>
                            <MagazineFlipbook />
                        </div>


                        <p className={styles.sectionDesc}>
                            Over the past year, I developed four unique visual designs for a series of WAV (White Always Visible) events — each tied to a specific party and era of the project.
                            <br /><br />
                            The original concept, <i>White Always Visible</i>, started out as a visual exploration of contrast — white and black, light and shadow, the tension and harmony between opposites. But as the project evolved, the visuals began to reflect not only conflict, but also moments of connection, dialogue, and even friendship between these extremes. Every new edition brought a fresh look and a new visual identity, but always kept the signature WAV aesthetic running through all the designs.
                            <br /><br />
                            While the visuals for each event were distinct — from icy, ethereal textures to wild, organic chaos — there’s always been a recognizable style and energy that ties them together. Each design was created from scratch in Blender, with custom shaders, 3D modeling, and attention to small details that gave every poster and animation its own vibe.
                            <br /><br />
                            Beyond the 3D work, I personally handled every part of the creative process: I designed all the posters, wrote the stories, filmed and edited teaser videos, and even stepped in as a performer for the teasers when it made sense for the story. For every WAV party, I made sure the branding wasn’t just consistent — it felt alive and evolving, with each piece telling part of a bigger story.
                            <br /><br />
                            These events weren’t just about visuals, but about building a full experience — from early teaser campaigns on social media to physical posters at the venue and atmospheric animations at the parties. The visual identity was more than a logo or a style — it was a living, breathing world that guests could step into, whether they were scrolling online or dancing at the event itself.
                            <br /><br />
                            <b>And out of all these digital experiments, we created something tangible — a physical WAV magazine.</b> It brought together all the posters, behind-the-scenes sketches, stories, and visual concepts from every party into one printed collectible. This magazine became a kind of time capsule for the project, letting people hold a piece of the WAV journey in their hands. For me, seeing it all come together in print was both surreal and rewarding — proof that even the most digital ideas can find a place in the physical world.
                            <br /><br />
                            Each project in this series pushed me to experiment — not just in Blender and After Effects, but in how I connect with people and build a narrative across different media. Looking back, I see a collection of work that’s as much about collaboration, mood, and shared experience as it is about technical design.
                            <br /><br />
                            For me, the WAV series is proof that even as things change — from visuals to the meaning behind them — a strong core identity and creative drive can unite everything into one big, weird, memorable journey.
                        </p>
                    </div>


                    <div className={styles.videoSection}>
                        <h4 className={styles.videoTitle}>watch the Back Process:</h4>


                        <div className={styles.imageContainer}>
                            <img
                                src="/mainpage/projects/wav/poster1.png"
                                alt="Preview"
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <img
                                src="/mainpage/projects/wav/poster2.png"
                                alt="Preview"
                            />
                        </div>

                        <div className={styles.imageContainer}>
                            <img
                                src="/mainpage/projects/wav/magazine1.png"
                                alt="Preview"
                            />
                        </div>

                        <div className={styles.imageContainer}>
                            <img
                                src="/mainpage/projects/wav/magazine2.png"
                                alt="Preview"
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/wav/finalProjector.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.imageContainer}>
                            <img
                                src="/mainpage/projects/wav/wav1.png"
                                alt="Preview"
                            />
                        </div>

                    </div>

                </Windows>
            </div>
        </main>
    );
}