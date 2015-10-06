<?php
  header('Content-type: application/json');
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo json_encode(array_merge($_POST, array('tweet_author' => 'JeffreyATW', 'tweet_avatar' => 'avatar.jpg')));
  } else {
    echo json_encode(array('tweet_content' => 'This is a canned tweet', 'tweet_author' => 'RandomDude', 'tweet_avatar' => 'randomdude.jpg'));
  }
?>