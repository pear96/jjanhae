package com.ssafy.api.response;

import com.ssafy.common.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

/**
 *  이번달 파티 목록 조회 ([GET] /user/conferences) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("ConferencesGetRes")
public class ConferencesGetRes extends BaseResponseBody {
    @ApiModelProperty(name="파티 리스트", example="['2022-02-01', '2022-02-02', '2022-02-03']")
    List<LocalDateTime> conferencesDateList;

    public static ConferencesGetRes of(Integer statusCode, String message, List<LocalDateTime> conferencesDateList) {
        ConferencesGetRes res = new ConferencesGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setConferencesDateList(conferencesDateList);
        return res;
    }
}
