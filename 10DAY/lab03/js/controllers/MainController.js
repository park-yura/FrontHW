// FormView를 가져와서 setup 메소드로 셋팅을 한다.
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";
// searchMenu를 가져온다.
import SearchMenu from "../models/SearchMenu.js";

const tag = "[MainController]";

// 외부에서 접근할 수 있도록 export
// 그 안에 가장 기본적인 셋팅을 위한 init()함수 적용
export default {
    init() {
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.resetForm());

        // SearchResultView 셋업할 때 #search-result 엘리먼트 세팅
        SearchResultView.setup(document.querySelector('#search-result'))
    },

    // 검색이 실행될 메소드 구현
    search(query){
        console.log(tag, "search()", query);
        // SearchMenu 모델을 매핑시킨다.
        SearchMenu.list(query).then(data => {
            // 서치 결과를 처리한 메소드를 하나 더 호출을 한다.
            this.onSearchResult(data);
            
        });
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input);
        // 검색을 하고 엔터를 쳤을 경우 onSubmit이 일어났을 때 검색하는 메소드가 호출되면 된다.
        this.search(input);
    },

    // reset 이벤트가 일어날 때 처리될 메소드
    resetForm(){
        console.log(tag, "onResetForm()");
    }, 

    // ResultView에 데이터를 렌더링 해준다
    onSearchResult(data){
        SearchResultView.render(data);
    }
}