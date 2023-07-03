import { Canvas } from '@react-three/fiber';
import { OrbitControls , PerspectiveCamera } from '@react-three/drei'

import styled from "styled-components";

export default function Square(){

    return(
        <SquareLayout>
             <Canvas shadows>
                <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.4} />
                <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />

                <mesh>
                    <boxGeometry args={[1,1,1]} />
                    <meshBasicMaterial color={'red'} />
                </mesh>
            </Canvas>
        </SquareLayout>
    )
}

const SquareLayout = styled.section`
    height: calc(100vh - 43px);
`