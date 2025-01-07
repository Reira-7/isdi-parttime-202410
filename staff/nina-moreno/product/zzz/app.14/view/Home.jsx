const Component = React.Component;

class Home extends Component {
  constructor(props) {
    console.log("Home -> constructor");

    super(props);
  }

  render() {
    console.log("Home -> render");

    return (
      <main>
        <h2>Home</h2>

        <h3>Hello, Peter Pan!</h3>

        <button
          type="button"
          onClick={() => {
            try {
              logic.logoutUser();

              this.props.onUserLoggedOut();
            } catch (error) {
              alert(error.message);

              console.error(error);
            }
          }}
        >
          Logout
        </button>

        <button type="button">+</button>

        <section>
          <article>
            <h3>jameshook</h3>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUta_DEV6cHrXNEgAniEM6VKbFy4VTOTOjWY-qz3_IlyOUsAlh7ERThAbmM_tRLGeLow&amp;usqp=CAU" />

            <p>here me</p>

            <time>2024-11-13T20:28:20.453Z</time>
          </article>

          <article>
            <h3>peterpan</h3>

            <img src="https://live.staticflickr.com/3064/2785899878_c3e48732e5_z.jpg" />

            <p>in love &lt;3</p>

            <time>2024-11-13T20:26:16.566Z</time>

            <button type="button">🗑️</button>
          </article>

          <article>
            <h3>peterpan</h3>

            <img src="https://jennycookies.com/wp-content/uploads/2012/09/KELLER-1007-800x534.jpg" />

            <p>when i was a kid</p>

            <time>2024-11-12T20:06:19.931Z</time>

            <button type="button">🗑️</button>
          </article>
        </section>
      </main>
    );
  }
}
