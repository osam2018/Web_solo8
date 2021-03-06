Mini Excel
==========
Quick Spreadsheet Sharing Web App

Description
-----------
미니 엑셀은 스프레드시트를 웹 상에서 쉽고, 빠르고, 가볍게 공유할 수 있는 웹 앱입니다.

지금까지의 웹 상에서의 스프레드시트 공유는 파일 업로드를 하거나, Google Sheets 같은 웹 오피스 앱에 붙여넣는 식으로 진행되어 왔습니다. 하지만 이런 방식은 너무 번거롭거나, 무겁고 느렸습니다. 미니 엑셀에서는 웹 오피스를 따로 실행할 필요 없이, 단순한 Copy & Paste 방식으로 스프레드시트 데이터를 복사하여 빠르게 공유할 수 있는 솔루션을 제시합니다.

Frameworks Used
---------------
Node.js, Vue.js, Element UI Toolkit, Handsontable, dom-to-image

Key Features & Techinal Info
----------------------------
### ★ 복사 붙여넣기로 빠른 표 생성 ★
보통 일반적인 방법으로는 웹 상에서 클립보드 접근이 불가능합니다. 하지만 미니 엑셀에서는 웹 페이지의 붙여넣기 영역에 보이지 않는 `<textarea>`를 겹치고, 이곳에 붙여넣기를 유도하여 클립보드 데이터를 간접적으로 접근하는 트릭을 사용하였습니다. 이후 Vue에서 `<textarea>`영역 변화를 감지하고 Handsontable 라이브러리를 활용한 표를 생성합니다. 이렇게 생성된 표는 간단한 수정이 가능합니다.

### ★ 클릭 한 번으로 빠른 공유 ★
표가 생성된 상태에서 공유하기 버튼을 누르면 즉시 표를 공유할 수 있는 다이얼로그가 띄워집니다. 이 과정에서 Handsontable 표 데이터(2차원 배열)를 Element UI 표 데이터(Object 배열)로 변환하고, 이렇게 생성된 표의 HTML 코드를 버튼 클릭으로 복사할 수 있게 됩니다. 또한, dom-to-image 라이브러리를 활용하여 표를 이미지로 변환하여 다운로드할 수 있는 기능을 제공합니다.

Unimplemented Features
----------------------
원래 공유하기 버튼을 누르면 Google Drive의 공유 링크 생성 기능처럼 웹 페이지 주소를 생성하고, 이 주소로 들어가면 엑셀 데이터를 미리 볼 수 있으며 이를 엑셀 파일 및 이미지로 다운로드하는 기능을 제공할 예정이었습니다. 하지만 이는 백엔드 개발 없이는 구현이 불가능하기 때문에, 링크 생성 기능 대신에 HTML 복사 기능을 구현하였습니다.

또한, 미니 엑셀의 목적 중 하나인 '가벼움'에 부합하지 않는 몇몇 코드가 있습니다.(`setInterval()` 사용 등) 최적화가 필요합니다.

Screenshots
-----------
See [here](./docs/screenshots.md).

Credits
-------
102기갑여단 일병 배솔반