// material
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function ViewSvg({ children }) {
    const theme = useTheme();
    const PRIMARY_LIGHTER = theme.palette.primary.lighter;
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;

    return (
        <Box>
            {children}
        </Box>
    );
}
