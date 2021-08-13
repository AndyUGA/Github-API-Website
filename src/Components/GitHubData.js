
import { getData } from "../API/getGitHubData";
import { useEffect, useState } from 'react';

function GitHubData() {

  const [data, setData] = useState();

  useEffect(() => {
    async function fetch() {
      const res = await getData('AndyUGA');
      setData(res);
    }
    fetch();

  }, []);

  return (
    <div class="content-body">
      {data && (
        <div class="container">
          <div class="sidebar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
            <a href = "">
              @{data.login}
            </a>

          </div>
          {/* <div class="content">
            {data.name} - 2
          </div> */}


          {/* <img src = {data.avatar_url} /> */}
        </div>
      )

      }

    </div>
  );
}

export default GitHubData;
