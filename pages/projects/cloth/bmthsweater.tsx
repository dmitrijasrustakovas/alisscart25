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
                <Windows title="BMTH Sweater" icons={tools}>

                    {/* Описание */}
                    <div className={`${styles.textSection} ${styles.sectionContent}`}>
                        <div className={styles.sectionTitle}>
                            <img
                                src="/mainpage/ui/folder.png"
                                alt="folder"
                                className={styles.folderIcon}
                            />BMTH <span className={styles.labelAccent}>{'{Sweater}'}</span>
                        </div>

                        <p className={styles.sectionDesc}>
                            This sweater is a fully custom piece — I bought a plain base and hand-stitched every detail myself.
                            <br /><br />
                            The red pentagram and all the decorative seams were sewn in by hand, using thick thread for a raw, DIY aesthetic. Every stitch was placed intentionally, creating a piece that’s both personal and expressive, with a nod to alternative music and visual culture.
                            <br /><br />
                            The process took hours of trial, error, and patience, turning a basic garment into something totally unique.
                            <br /><br />
                            Examples are below — each project is made by hand, combining found materials, custom patterns, and my own vision.
                        </p>
                    </div>



                    <div className={styles.videoSection}>

                        <div className={styles.imageContainer}>
                            <img
                                src="/mainpage/projects/bmthsweater/picturessweater.png"
                                alt="Preview"
                            />
                        </div>
                    </div>
                </Windows>
            </div>
        </main>
    );
}