// material
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function Growth({ ...other }) {
    const theme = useTheme();
    const PRIMARY_MAIN = theme.palette.primary.main;

    return (
        <Box {...other}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                class="component-iconify MuiBox-root css-v0h3dx iconify iconify--solar" width="24px" height="24px"
                viewBox="0 0 24 24">
                <g fill="#00AB55">
                    <path d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75H5Z" opacity=".5">
                    </path>
                    <path fill-rule="evenodd"
                        d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057Z"
                        clip-rule="evenodd"></path>
                </g>
            </svg>
        </Box>
    );
}
