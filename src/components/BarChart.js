import React from 'react';
import {Stage, Layer, Rect} from 'react-konva';

export default () => (
    <Stage width={100} height={100}>
        <Layer>
            <Rect fill="red" width={20} height={20}/>
            <Rect fill="blue" x={50} width={20} height={60}/>
        </Layer>
    </Stage>
);
