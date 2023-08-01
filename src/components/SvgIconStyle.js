import { Box } from '@mui/material';

// ----------------------------------------------------------------------


// export default function SvgIconStyle({ src, color = 'inherit', sx }) {
//     return (
//         <Box
//             component="span"
//             className='svgIconCustom'
//             sx={{
//                 width: 24,
//                 height: 24,
//                 // backgroundColor: "red",
//                 mask: `url(${src}) no-repeat center / contain`,
//                 WebkitMask: `url(${src}) no-repeat center / contain`,
//                 bgcolor: `${color}.main`,
//                 ...(color === 'inherit' && { bgcolor: 'currentColor' }),
//                 ...(color === 'action' && { bgcolor: 'action.active' }),
//                 ...(color === 'disabled' && { bgcolor: 'action.disabled' }),
//                 ...(color === 'paper' && { bgcolor: 'background.paper' }),
//                 ...sx
//             }}
//         />
//     );
// }



export default function SvgIconStyle({ src, color = 'inherit', sx }) {
    const backgroundColorMap = {
        inherit: 'currentColor',
        action: 'action.active',
        disabled: 'action.disabled',
        paper: 'background.paper',
    };

    const defaultStyles = {
        width: 24,
        height: 24,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: backgroundColorMap[color] || color,
    };

    const mergedStyles = { ...defaultStyles, ...sx };

    return <Box component={"span"} className="svgIconCustom" sx={mergedStyles} />;
}