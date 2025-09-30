// pages/projects/animations/pervaya.tsx
import React, { useState, useEffect } from 'react';
import HeadUp from '../../../components/HeadUp';
import Loader from '../../../components/Loader';
import Windows from '../../../components/Window';

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
                <Windows title="CRASHFACE" icons={tools}>

                    {/* Описание */}
                    <div className={`${styles.textSection} ${styles.sectionContent}`}>
                        <div className={styles.sectionTitle}>
                            <img
                                src="/mainpage/ui/folder.png"
                                alt="folder"
                                className={styles.folderIcon}
                            />CRASHFACE <span className={styles.labelAccent}>{'{animation}'}</span>
                        </div>
                        {/* Spotify */}
                        <div className={`${styles.spotifySection} ${styles.sectionContent}`}>
                            <iframe
                                style={{ borderRadius: "16px", width: "100%", maxWidth: "420px", margin: "0 auto", display: "block" }}
                                src="https://open.spotify.com/embed/track/1bo309XOcm7U5S0Cxl3eg2?utm_source=generator"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>

                        <p className={styles.sectionDesc}>
                            This project was all about recreating a hotel room in 3D — a place full of personal memories, brought to life for the British band <b>CRASHFACE</b> (who, by the way, perform at iconic festivals like Reading). The client wanted to capture the atmosphere of a room from the past, and I set out to make it as authentic as possible, blending digital and “handmade” details.<br /><br />
                            Everything you see was modeled in Blender, with special attention paid to props, lighting, and the mood of the scene. The lyrics of the song are written on notepads and loose pages, all drawn by hand (well, digitally, but with a handcrafted vibe) — like snapshots from someone’s memories, scattered around the room. Every element was intentionally imperfect, as if someone just left them there.<br /><br />
                            The whole scene is a reconstruction of a memory: textures and small details were added to evoke that nostalgic, lived-in feeling. The goal was to make the space feel both real and dreamy, almost like stepping into a faded memory. I used post-processing for depth and color grading, matching the dark, intimate energy of the track.<br /><br />
                            The final result is a digital throwback — a piece that’s as much about the mood as it is about the details. It’s a visual story made for <b>CRASHFACE</b>, capturing a sense of time, place, and emotion in every rendered frame.
                        </p>
                    </div>


                    <div className={styles.videoSection}>
                        <h4 className={styles.videoTitle}>watch the Back Process:</h4>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/crashface/you0000-0600.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/crashface/view yT .mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                    </div>

                </Windows>
            </div>
        </main>
    );
}