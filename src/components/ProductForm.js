import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles, withStyles } from "@mui/styles";
import { Box, styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles({
  nodeText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: ".8rem",
  },
  list: {
    padding: 0,
  },
});
const StyledTypography = styled(Typography)(`
  text-transform: uppercase;
  font-weight: bold !important;
  text-align: left;
  padding-left: 1.8rem;
`);

const StyledCardContent = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
  height: auto;
`);

const StyledListItemButton = styled(ListItemButton)(`
  padding:.2rem 1rem;
  padding-left: 0rem;
  `);

const StyledList = styled(List)(`
  padding:0;
  justify-content: center;
  height: fit-content !important;
`);

const StyledListItemIcon = styled(ListItemIcon)(`
  width: min-conent !important;
  padding: 0rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  marign-right: 1rem;
`);

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#E69A3A",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#E69A3A",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#E69A3A",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E69A3A",
      },
    },
  },
})(TextField);

export default function ProductForm(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [listOpen, setListOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([]);
  const Category = [...props.Lists];

  const classes = useStyles();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setListOpen(!listOpen);
  };

  const handleExpandClick = () => {
    let e = !expanded;
    setExpanded(e);
  };

  return (
    <Card sx={{ width: "100%", padding: 0 }}>
      <StyledCardContent>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            padding: 0,
            height: "100%",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemText
            disableTypography
            primary={
              <StyledTypography className={classes.nodeText}>
                Product Form
              </StyledTypography>
            }
          />
          <Box sx={{ px: 3.25 }}>
            <StyledTextField
              id="Search-product-orm"
              placeholder="Search product form"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {Category.slice(0, 3).map((item, index) => {
            const labelId = `checkbox-list-label-${item.title}`;

            return (
              <StyledList key={index}>
                <StyledListItemButton
                  sx={{ pl: 4 }}
                  onClick={handleToggle(item.title)}
                >
                  <StyledListItemIcon>
                    <Checkbox
                      size="large"
                      edge="start"
                      checked={checked.indexOf(item.title) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "#E69A3A",
                        },
                      }}
                      style={{
                        transform: "scale(.8)",
                      }}
                    />
                  </StyledListItemIcon>
                  <ListItemText
                    style={{ textTransform: "capitalize" }}
                    id={labelId}
                    primary={`${item.title}`}
                  />
                </StyledListItemButton>
              </StyledList>
            );
          })}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {Category.slice(3, Category.length).map((item, index) => {
              const labelId = `checkbox-list-label-${item.title}`;

              return (
                <StyledList key={index}>
                  <StyledListItemButton
                    sx={{ pl: 4 }}
                    onClick={handleToggle(item)}
                  >
                    <StyledListItemIcon>
                      <Checkbox
                        size="large"
                        edge="start"
                        checked={checked.indexOf(item.title) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "#E69A3A",
                          },
                        }}
                        style={{
                          transform: "scale(.8)",
                        }}
                      />
                    </StyledListItemIcon>
                    <ListItemText
                      style={{ textTransform: "capitalize" }}
                      id={labelId}
                      primary={`${item.title}`}
                    />
                  </StyledListItemButton>
                </StyledList>
              );
            })}
          </Collapse>

          <CardActions disableSpacing>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="view all"
            >
              <Typography sx={{ px: 1 }}>
                {expanded ? "View Less" : "View All"}
              </Typography>
            </IconButton>
          </CardActions>
        </List>
      </StyledCardContent>
    </Card>
  );
}
