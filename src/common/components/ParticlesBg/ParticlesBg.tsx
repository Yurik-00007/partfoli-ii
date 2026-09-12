import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

export const ParticlesBg = () => {
    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                particles: {
                    number: {
                        value: 10,
                        density: {
                            enable: false,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#333",
                    },
                    shape: {
                        type: "dot",
                    },
                    opacity: {
                        value: 0.8,
                    },
                    size: {
                        value: 4,
                    },
                    rotate: {
                        random: true,
                        direction: "clockwise",
                        animation: {
                            enable: true,
                            speed: 5,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 600,
                        color: "#333",
                        opacity: 0.4,
                        width: 2,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: ["grab"],
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}
