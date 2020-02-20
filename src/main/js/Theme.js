import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const Theme = createMuiTheme({
    overrides: {
        MuiListItem: {
            gutters: {
                paddingLeft: "24px"
            }
        }
    },
});

export default Theme;