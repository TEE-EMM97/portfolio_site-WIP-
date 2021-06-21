exports.githubApiQuery = `
query($github_login: String!) {
	user(login: $github_login) {
		pinnedItems(first: 10, types: REPOSITORY, ){
			nodes {
				... on Repository {
			 id                       
			 name
			 url
			 description
			 homepageUrl
		 }
		}
	 }
	}
}
`

// Source Code for REPOS
// exports.githubApiQuery = `
// query($github_login: String!) {
// 	user(login: $github_login) {
// 		  pinnedItems(first: 10, orderBy:{field: UPDATED_AT, direction: DESC}){
// 			 nodes {
// 				id
// 				name
// 				description
// 				url
// 				updatedAt
// 				forkCount
// 				openGraphImageUrl
// 				stargazers {
// 					totalCount
// 				}
// 				readme: object(expression: "master:README.md") {
// 					... on Blob {
// 						text
// 					}
// 				}
// 				licenseInfo {
// 					id
// 				}
// 				primaryLanguage {
// 					name
// 				}
// 				languages(first: 5) {
// 					nodes {
// 						name
// 					}
// 				}
// 			 }
// 		  }
// 		}
// }
// `