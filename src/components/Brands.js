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
import {  TextField } from "@mui/material";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

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
  padding:.2rem 0;
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
    wordWrap: "break-word",
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

export default function BrandsFilter(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [listOpen, setListOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([]);

  const [value, setValue] = React.useState();
  const Brands = props.brands;
  const classes = useStyles();
console.log(value);
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
                Brands
              </StyledTypography>
            }
          />
          <Box sx={{ px: 3.25 }}>
            <Autocomplete
              sx={{ width: "100%" }}
              multiple
              id="chips-autocomplete"
              value={value}
              fullWidth
              onChange={(event, newValue) => {
                setValue([...newValue]);
              }}
              options={Brands}
              getOptionLabel={(option) => option}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <StyledTextField
                  id="Search-brands"
                  {...params}
                  placeholder="Search Brands"
                  sx={{ py: ".5rem" }}
                />
              )}
            />
          </Box>
          {Brands.slice(0, 3).map((item, index) => {
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
            {Brands.slice(3, Brands.length).map((item, index) => {
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
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
