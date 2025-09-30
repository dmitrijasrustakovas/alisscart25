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
                <Windows title="Zaperwave" icons={tools}>

                    {/* Описание */}
                    <div className={`${styles.textSection} ${styles.sectionContent}`}>
                        <div className={styles.sectionTitle}>
                            <img
                                src="/mainpage/ui/folder.png"
                                alt="folder"
                                className={styles.folderIcon}
                            />ZAPERWAVE <span className={styles.labelAccent}>{''}</span>
                        </div>
                        {/* Spotify */}
                        <div className={`${styles.spotifySection} ${styles.sectionContent}`}>
                            <iframe
                                style={{ borderRadius: "16px", width: "100%", maxWidth: "420px", margin: "0 auto", display: "block" }}
                                src="https://open.spotify.com/embed/track/2tdMOJyMwdimIP4pl8qxa4?utm_source=generator"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                        <p className={styles.sectionDesc}>
                            This 3D animation was fully imagined, designed, and rendered by me for Zaperwave’s single holding on to nothing.
                            <br /><br />
                            I developed every visual element from scratch — from the color palette and dynamic lighting to the organic, thorn-like geometry and surreal digital atmosphere. The thorns and semi-organic growths were inspired by the song’s emotional sense of fragility and protection, while the lighting and colors were crafted to evoke both intimacy and cyberpunk isolation.
                            <br /><br />
                            The character’s pose, costume, and overall aesthetic are all custom concepts that I devised to blend the boundaries between reality and digital fantasy. Every frame was built in Blender and textured in Substance, then rendered with careful post-effects for a dreamlike, otherworldly vibe.
                            <br /><br />
                            This project was posted to Instagram with @zaperwave to promote her debut EP before it hit streaming platforms.
                        </p>
                    </div>



                    <div className={styles.videoSection}>
                        <h4 className={styles.videoTitle}>watch the Back Process:</h4>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0060.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0050.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0130.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0051.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0302.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0202.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0470.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0303.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/0554.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/zaperwave/4540.mp4"
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