import React, { useMemo } from 'react'
import { Polygon, PolygonProps, Svg, SvgProps } from 'react-native-svg'
interface Props {
    /**
     * hexagon diameter
     */
    width: number
    stroke?: PolygonProps['stroke'],
    strokeWidth?: PolygonProps['strokeWidth'],
    fill?: PolygonProps['fill'],
    /**
     * PROP of SVG tags (additional) 
     */
    svgProps?: SvgProps
    /**
     * PROP of PolygonProps tag (additional)
     */
    polygonProps?: PolygonProps
}
export default function Hexagon({ width = 100, stroke = "black", strokeWidth = "2", fill = "lightblue", ...props }: Props) {
    const points = useMemo(() => {
        const diameter = width
        const radius = (diameter / 2)
        const m = (Math.sqrt(3) / 2) * radius// Math.sin(60) * radius //-> x
        const n = (1 / 2) * radius//Math.cos(60) * radius//-> y
        const hexagonPoints = [
            { x: radius, y: 0 },
            { x: radius + m, y: radius - n },//60
            { x: radius + m, y: radius + n },
            { x: radius, y: diameter },//180
            { x: radius - m, y: radius + n },
            { x: radius - m, y: radius - n },
            { x: radius, y: 0 },
        ]
        const points_ = hexagonPoints.map(point => `${point.x},${point.y}`).join(' ');
        return points_
    }, [width])
    return (
        <Svg height={width} width={width} {...props.svgProps}>
            <Polygon points={points} fill={fill} stroke={stroke} strokeWidth={strokeWidth} {...props.polygonProps} />
        </Svg>
    );
};
