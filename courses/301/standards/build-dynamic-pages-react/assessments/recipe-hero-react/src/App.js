import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faPlus } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (
  <div id="the-app">
    <header className="app-header">
      <h1>Recipe Hero</h1>
    </header>
    <main>
      <section className="ingredient-search">
        <h2>Search Recipes By Ingredient</h2>
        <form className="ingredient-picker">
          <select placeholder="Add an ingredient">
            <option disabled="">Pick an ingredient</option>
          </select>
          <button>
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </form>
        <ul className="ingredients">
          <li className="recipe-ingredient">
            <span>Eggs</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
          <li className="recipe-ingredient">
            <span>Bread</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
          <li className="recipe-ingredient">
            <span>Cheese</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
          <li className="recipe-ingredient">
            <span>Bacon</span>
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          </li>
        </ul>
      </section>
      <ul className="recipes">
        <li>
          <div className="recipe-card">
            <h2>Framed Eggs</h2>
            <div className="recipe-description">
              <img src="images/framed-egg.jpg" />
              <p>
                Egg in frame or toad in the hole—whatever you choose to call it, this recipe
                is a super fun way to spruce up the classic eggs and toast breakfast. Leave
                the yolks slightly runny so you can dip those crusty cutouts and sop up all
                the golden goodness on your plate!
              </p>
            </div>
            <ul className="recipe-step-indicator">
              <li className="active">1</li>
              <li className="">2</li>
              <li className="">3</li>
              <li className="">4</li>
              <li className="">5</li>
              <li className="">6</li>
            </ul>
            <div className="recipe-step">
              <p>
                Cut out center of each bread slice using a 2 1/2- to 3-inch heart, round,
                or other shaped cookie cutter. Set slices aside, reserving both bread and cutouts.
              </p>
              <img src="/images/framed-egg-1.jpg" alt="Step 1" />
            </div>
            <div className="command-bar">
            {/* Placeholder to keep flex style */}<span></span><button>Next</button>
            </div>
          </div>
        </li>
        <li>
          <div className="recipe-card">
            <h2>Cheesy Eggs</h2>
            <div className="recipe-description">
              <img src="images/cheesy-eggs.jpg" />
              <p>
                Some recipes are deceptively simple. Although I first learnt how to make
                scrambled eggs with cheese when I was about 13, I just really did not
                know how great they could and would become.
              </p>
            </div>
            <ul className="recipe-step-indicator">
              <li className="active">1</li>
              <li className="">2</li>
            </ul>
            <div className="recipe-step">
              <p>
                In a large nonstick pan with sloped sides (even a wok shape works), melt
                the butter over medium-low heat, being careful to not brown the butter.
                If it begins to bubble, the heat is too high, so lower the heat to cook
                the eggs properly. (Slow and low like BBQ is the way to go with eggs.)
              </p>
              <img src="/images/greased-skillet.jpg" alt="Step 1" />
            </div>
            <div className="command-bar">
            {/* Placeholder to keep flex style */}<span></span><button>Next</button>
            </div>
          </div>
        </li>
        <li>
          <div className="recipe-card">
            <h2>Toast</h2>
            <div className="recipe-description">
              <img src="images/bread.jpg" />
              <p>
                Toast is almost as old as civilization itself, made by the early Egyptians
                to put some spark back in stale bread. It's still one of the most versatile,
                delicious, and completely perfect snacks for breakfast or as a side at any meal.
                You can make toast from any kind of bread in the toaster, in the oven, over
                a fire, and learn to top with a variety of different things to your taste.
                See Step 1 to learn more about making toast.
              </p>
            </div>
            <ul className="recipe-step-indicator">
              <li className="active">1</li>
              <li className="">2</li>
              <li className="">3</li>
            </ul>
            <div className="recipe-step">
              <p>Place toast in toaster</p>
              <img src="/images/framed-egg-2.jpg" alt="Step 1" />
            </div>
            <div className="command-bar">
            {/* Placeholder to keep flex style */}<span></span><button>Next</button>
            </div>
          </div>
        </li>
        <li>
          <div className="recipe-card">
            <h2>Scrambled Eggs</h2>
            <div className="recipe-description">
              <img src="images/scrambled-eggs.webp" />
              <p>
                Scrambled eggs may be a relatively easy meal to make, but it turns out you
                are probably doing it wrong - according to chef Gordon Ramsay. Although
                scrambling a couple of eggs in a pan will result in decent eggs no matter
                what method you use, the celebrity chef has a unique technique that makes
                “scrambled eggs to die for" - even if he does say so himself.
              </p>
            </div>
            <ul className="recipe-step-indicator">
              <li className="active">1</li>
              <li className="">2</li>
              <li className="">3</li>
              <li className="">4</li>
            </ul>
            <div className="recipe-step">
              <p>
                Place your skillet on the stovetop and turn on the heat. I leave the heat
                somewhere between medium low and medium, so it warms up but doesn't get too hot.
              </p>
              <img src="/images/hot-skillet.jpg" alt="Step 1" />
            </div>
            <div className="command-bar">
            {/* Placeholder to keep flex style */}<span></span><button>Next</button>
            </div>
          </div>
        </li>
        <li>
          <div className="recipe-card">
            <h2>Cheesy Bacon</h2>
            <div className="recipe-description">
              <img src="images/cheesy-bacon.jpg" />
              <p>
                nd it is the star of one of the most classic hors d’oeuvres out there,
                the cheese straw. It’s been a while since I made cheese straws, but they
                were one of the first things I made as a kid where I felt the power and
                the pleasure of making something that really impressed (and that… shhh…
                wasn’t really hard). When I picture my 8 year old self passing them at
                some party my parents were hosting, I can only hope that I wasn’t too
                eye-rollingly self-satisfied as I held up some little tray saying smugly,
                “Cheese straw?”
              </p>
            </div>
            <ul className="recipe-step-indicator">
              <li className="">1</li>
              <li className="active">2</li>
              <li className="">3</li>
            </ul>
            <div className="recipe-step">
              <p>
                You can use any kind of packaged bacon to make these, or go for some
                high end bacon—either way you have the kind of nibble or appetizer that
                people stop talking to eat.
              </p>
              <img src="/images/hot-skillet.jpg" alt="Step 1" />
            </div>
            <div className="command-bar">
              <button>Previous</button><button>Next</button>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
  )
}

export default App
