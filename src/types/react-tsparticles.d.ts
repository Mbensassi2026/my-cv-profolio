// types/react-tsparticles.d.ts
declare module 'react-tsparticles' {
    import { Container, Engine, ISourceOptions, RecursivePartial } from "tsparticles-engine";
    import { IParticlesProps } from "react-tsparticles/dist/ParticlesProps";
    export { loadFull } from "tsparticles";
    const Particles: import("react").ForwardRefExoticComponent<IParticlesProps & import("react").RefAttributes<Container>>;
    export default Particles;
}
