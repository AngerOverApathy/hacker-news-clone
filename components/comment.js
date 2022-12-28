export default function Comment(comment) {
  const hasNestedComments = comment.comments.length > 0; //comment length >0 === true

    //recursive function, map over comments to check for nested comments
    //join comments together else return empty string
    //use comment.level to apply css properties to specific level of comments
    return `
      <div class="nested-comments-${comment.level}">
        <p class="comment-header">
          ${comment.user} | ${comment.time_ago}
        </p>
        ${comment.content}
        ${hasNestedComments ? comment.comments.map( comment => Comment(comment)).join('') : ''}  
      </div>
    `  
  }