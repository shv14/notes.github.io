document.addEventListener("DOMContentLoaded", function() {
    const noteList = document.getElementById("noteList");
    const noteForm = document.getElementById("noteForm");

    noteForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const noteTitle = document.getElementById("noteTitle").value;
        const noteContent = document.getElementById("noteContent").value;

        if (noteTitle && noteContent) {
            createNoteElement(noteTitle, noteContent);
            noteForm.reset();
        }
    });

    function createNoteElement(title, content) {
        const note = document.createElement("div");
        note.className = "note";
        note.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;
        noteList.appendChild(note);
    }
});
