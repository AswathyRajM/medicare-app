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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";

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

const StyledListListItemButton = styled(ListItemButton)(`
  padding:0;
  height: 2.5em !important;
  margin-bottom: 0rem;
`);

const StyledList = styled(List)(`
  padding:0;
  justify-content: center;
  height: fit-content !important;
`);

const StyledListItemIcon = styled(ListItemIcon)(`
  width: min-conent !important;
  padding:0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  marign-right: 1rem;
`);

export default function CategoryWrapper(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
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

  const handleItemToggle = (value) => () => {
    if (listOpen) {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    }
  };

  const handleExpandClick = () => {
    let e = !expanded;
    setExpanded(e);
  };
  const handleClick = (value) => () => {
    setOpen(!open);
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
                {props.title}
              </StyledTypography>
            }
          />

          {Category.slice(0, 4).map((item) => {
            const labelId = `checkbox-list-label-${item.title}`;

            return (
              <StyledList>
                <StyledListItemButton
                  sx={{ pl: 1 }}
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
                          color: "black",
                        },
                      }}
                      style={{
                        transform: "scale(.8)",
                      }}
                    />
                  </StyledListItemIcon>
                  <ListItemText id={labelId} primary={`${item.title}`} />
                </StyledListItemButton>
              </StyledList>
            );
          })}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {Category.slice(4, Category.length).map((item, index) => {
              const labelId = `checkbox-list-label-${item.title}`;

              return (
                <StyledList>
                  <StyledListItemButton
                    onClick={handleToggle(item.title)}
                    sx={{ pl: 1 }}
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
                            color: "black",
                          },
                        }}
                        style={{
                          transform: "scale(.8)",
                        }}
                      />
                    </StyledListItemIcon>
                    <ListItemText id={labelId} primary={`${item.title}`} />
                  </StyledListItemButton>
                </StyledList>
              );
            })}
          </Collapse>

          <CardActions disableSpacing>
            <IconButton
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="view all"
            >
              <Typography sx={{ color: "#E69A3A" }}>
                {expanded ? "View Less" : "View All"}
              </Typography>
            </IconButton>
          </CardActions>
        </List>
      </StyledCardContent>
    </Card>
  );
}