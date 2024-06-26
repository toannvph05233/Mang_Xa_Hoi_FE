import { useState, useEffect, useContext } from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import "./style.scss";
import {
  deleteComment,
  getChildCommentListByPostId,
  getFirstLevelCommentListByPostId,
} from "api/postService";
import { convertUTCtoLocalDate, calculateFromNow } from "utils/calcDateTime";
import { substringUsername } from "utils/resolveData";
import CommentInput from "components/common/CommentInput";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { getCurrentUser } from "utils/jwtToken";
import CustomModal from "../CustomModal";
import useLoading from "hooks/useLoading";
import { AuthUser } from "../../../App";
import { reportContent } from "constant/types";
import InfoIcon from "@mui/icons-material/Info";
import { createCommentReport } from "api/reportService";
import useSnackbar from "hooks/useSnackbar";
import CommentItem from "../CommentItem";

const CommentOptionModal = ({
  isChild = false,
  index = 0,
  commentId,
  handleCloseModal,
  handleFilterComment,
  handleOpenReportModal,
  comment,
}) => {
  const Auth = useContext(AuthUser);

  const handleDeleteComment = () => {
    deleteComment(commentId)
      .then((res) => {
        if (res.status === 200) {
          handleCloseModal();
          if(isChild) {
            handleFilterComment(commentId, index)
          }
          handleFilterComment(commentId);
        }
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {});
  };

  return (
    <Typography component="div" className="comment-option-container">
      <Typography component="div" className="action-btns">
        {!Auth.auth.isAdmin &&
          comment.createdBy?.username !== getCurrentUser().username && (
            <Button className="report-btn" onClick={handleOpenReportModal}>
              Report
            </Button>
          )}
        {!Auth.auth.isAdmin &&
          comment.createdBy?.username === getCurrentUser().username && (
            <Button className="delete-btn" onClick={handleDeleteComment}>
              Delete
            </Button>
          )}
        <Button className="cancel-btn" onClick={handleCloseModal}>
          Cancel
        </Button>
      </Typography>
    </Typography>
  );
};

export default CommentOptionModal;
