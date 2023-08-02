// material
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function Decline({ ...other }) {
    const theme = useTheme();
    const PRIMARY_MAIN = theme.palette.primary.main;

    return (
        <Box {...other}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                class="component-iconify MuiBox-root css-1d7gxh4 iconify iconify--solar" width="24px" height="24px"
                viewBox="0 0 24 24">
                <g fill="currentColor">
                    <path d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25H5Z" opacity=".5">
                    </path>
                    <path fill-rule="evenodd"
                        d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058Z"
                        clip-rule="evenodd"></path>
                </g>
            </svg>
        </Box>
    );
}
