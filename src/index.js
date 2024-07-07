
class MyDatatables {
  constructor(tableId, options) {
    console.log("asdfasdfasd")
    this.table = document.getElementById(tableId);
    this.options = options;
    this.init();
  }

  init() {
    this.renderTable();
    this.addEventListeners();
  }

  renderTable() {
    console.log('Rendering table');
  }

  addEventListeners() {
    const headers = this.table.querySelectorAll('th');
    headers.forEach((header, index) => {
      header.addEventListener('click', () => this.sortTable(index, true));
    });
  }

  sortTable(columnIndex, ascending) {
    const rows = Array.from(this.table.querySelectorAll('tr')).slice(1);
    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].innerText;
      const cellB = rowB.cells[columnIndex].innerText;

      if (ascending) {
        return cellA.localeCompare(cellB);
      } else {
        return cellB.localeCompare(cellA);
      }
    });

    const tbody = this.table.querySelector('tbody');
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
  }
}

export default MyDatatables;
