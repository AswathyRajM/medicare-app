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
`);

export default function SideFilter(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [listOpen, setListOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([]);
  const Category = props.List;
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
          <ListItemButton onClick={handleClick()}>
            <ListItemText
              disableTypography
              primary={
                <StyledTypography className={classes.nodeText}>
                  Category
                </StyledTypography>
              }
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {Category.slice(0, 3).map((item, index) => {
              const labelId = `checkbox-list-label-${item}`;

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
                        checked={checked.indexOf(item) !== -1}
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
                      primary={`${item}`}
                    />
                  </StyledListItemButton>
                </StyledList>
              );
            })}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {Category.slice(3, Category.length).map((item, index) => {
                const labelId = `checkbox-list-label-${item}`;

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
                          checked={checked.indexOf(item) !== -1}
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
                        primary={`${item}`}
                      />
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
                <Typography sx={{ px: 1 }}>
                  {expanded ? "View Less" : "View All"}
                </Typography>
              </IconButton>
            </CardActions>
          </Collapse>
        </List>
      </StyledCardContent>
    </Card>
  );
}
