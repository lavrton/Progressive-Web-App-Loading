import React from 'react';
import {Stage, Layer, Line} from 'react-konva';

export default () => (
    <Stage width={100} height={100}>
        <Layer>
            <Line stroke="green" points={[0, 0, 20, 90, 50, 20, 100, 100]}/>
        </Layer>
    </Stage>
);
