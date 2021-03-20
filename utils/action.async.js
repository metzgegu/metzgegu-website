export async function getGitHubContributions(token, username) {
    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    const values = data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(item => item.contributionDays).map(item => ({ date: item.date, count: item.contributionCount }))
    const valuesWithoutEmpty = values.filter(val => val.count !== 0)
    const moy = valuesWithoutEmpty.reduce((acc, val) => acc + val.count, 0) / valuesWithoutEmpty.length
    const max = values.reduce((max, value) => Math.max(max, value.count), 0)
    return { values, moy, max }
}