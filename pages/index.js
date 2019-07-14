import "../styles/index.css";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
  static async getInitialProps() {
    const url = "https://convolabai.atlassian.net/rest/api/3/users/search";
    let allUsers = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic cGFra2F3YXRAY29udm9sYWIuYWk6bVRQeXY2UnIyWHhiaWJUdUF4cGQ4MThE"
      }
    }).then(result => {
      return result.json();
    });
    return {
      allUsers
    };
  }

  render() {
    const { allUsers } = this.props;
    return (
      <div className="container">
        <header>
          <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
              <img className="h-8 w-8 mr-3" src="/static/icon/charmander.png" />
              <span className="font-semibold text-xl tracking-tight">
                CVL GodJira
              </span>
            </div>
          </nav>
        </header>
        <main>
          <div className="flex mb-4 flex-wrap">
            {allUsers.map(user => {
              return (
                <div className="w-1/3 mb-10">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg p-5">
                    <div class="flex items-center border-b-2 pb-3">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={user.avatarUrls["48x48"]}
                      />
                      <div class="text-sm font-semibold">
                        <p class="text-gray-900 leading-none">
                          {user.displayName}
                        </p>
                        <p class="text-gray-600 break-all">
                          {user.emailAddress}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
