This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For installation:

npm install

npm start

This application shows the locations selected by users on the map and in the list and connects markers on the map with straight lines, thus making a simple route.

To add a new route point, you need to write the name of the location in the search bar. After that, it will appear last in the list, a marker will appear on the map showing where this place is located, and the map will be centered on this marker.

The stages of the route follow in the order in which they are listed. This order can be changed by dragging the list items to another location. Markers on the map can also be dragged, then the name of the corresponding place in the list is changed and the route is rebuilt. When clicking on a marker on the map, an information window appears with the name of the location. When you click again, this window disappears (you may also click the closing cross on the window).

Route elements can be deleted by clicking on the cross next to the place name in the list.

For google map used react-google-maps.

For a list with the ability to drag items - react-sortable-hoc


Russian:

Для установки:

npm install

npm start



Данное приложение запоминает выбранные пользователям места, показывает их на карте и в списке и соединяет маркеры на карте прямыми линиями, составляя таким образом простой маршрут.

Чтобы добавить новую точку маршрута, нужно написать название места в строке поиска. После этого она появится последней в списке, на карте появится маркер, показывающий, где это место находится, и карта отцентруется на этом маркере.

Этапы маршрута следуют в таком порядке, в каком они находятся в списке. Этот порядок можно изменить, перетащив элементы списка на другое место.
Маркеры на карте тоже можно перетаскивать, после этого изменяется наименование соответствующего места в списке и перестраивается маршрут.
При клике на маркер на карте, появляется информационное окно с названием места. При повторном клике это окно пропадает(как и по нажатию на закрывающий крестик).

Элементы маршрута можно удалять, нажав на крестик рядом с названием места в списке.


Для карты google использовался react-google-maps.

Для списка с возможностью перетаскивать элементы - react-sortable-hoc
