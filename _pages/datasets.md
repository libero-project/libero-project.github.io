---
title: LIBERO Datasets
subtitle: For more detailed description, please refer to the <a href="">LIBERO documentation</a>
featured_image: /assets/img/libero/whole_img.png
---

#### What are included

<div class="row justify-content-center align-items-center">
    <div class="col">
    &#10003; RGB images from workspace and wrist cameras<br>
    &#10003; Proprioception<br>
    &#10003; Language task specifications<br>
    &#10003; PDDL scene descriptions<br>
    </div>
    <!-- <div class="info info-horizontal bg-default" style=" background-color: #555!important">
        <div class="description pl-4">
        <h4 class="title text-warning">LIBERO</h4>
        <a href="" class="text-warning">[LIBERO codebase]</a>
        <p class="description opacity-8">
            <h6 class="display-7 text-white">
            <li>Procedural generation pipeline from human activity datasets</li>
            <li>130 tasks</li>
            <li>65,000 high-quality demonstrations for sample-efficient leanring</li>
            <li>Based on RoboSuite</li>
            </h6>
        </p>
        </div>
    </div> -->
    <div class="col">
    <!-- <video class="page-header-image card-background" autoplay loop muted playsinline poster="{{ page.featured_image | relative_url }}" src="{{ page.featured_video | relative_url }}"></video> -->
    <video class="ml-lg-5" autoplay loop muted playsinline src="{{ '/assets/videos/libero_demonstration_videos.mp4' | relative_url }}" height="295px" width="500px"></video>
    </div>
</div>

<br>

{% include dataset_analysis_total_frames.html %}

{% include dataset_analysis_frame_distribution.html %}


#### Download Datasets
<i class="fa fa-download"></i> [LIBERO-Spatial](https://utexas.box.com/shared/static/04k94hyizn4huhbv5sz4ev9p2h1p6s7f.zip): 10 tasks from LIBERO-Spatial suite.<br>
<i class="fa fa-download"></i> [LIBERO-Object](https://utexas.box.com/shared/static/avkklgeq0e1dgzxz52x488whpu8mgspk.zip): 10 tasks from LIBERO-Object suite.<br>
<i class="fa fa-download"></i> [LIBERO-Goal](https://utexas.box.com/shared/static/iv5e4dos8yy2b212pkzkpxu9wbdgjfeg.zip): 10 tasks from LIBERO-Goal suite.<br>
<i class="fa fa-download"></i> [LIBERO-100](https://utexas.box.com/shared/static/cv73j8zschq8auh9npzt876fdc1akvmk.zip): 100 tasks from LIBERO-100 suite. Note that the datasets are split under the folder names of LIBERO-90 and LIBERO-10.<br>
We also have a [script](https://lifelong-robot-learning.github.io/LIBERO/html/algo_data/datasets.html) for programmatic downloading the datasets.

#### Download Checkpoints
<i class="fa fa-download"></i> [LIBERO-Spatial Best Model Checkpoints]() <br>
<i class="fa fa-download"></i> [LIBERO-Object Best Model Checkpoints]() <br>
<i class="fa fa-download"></i> [LIBERO-Goal Best Model Checkpoints]() <br>
<i class="fa fa-download"></i> [LIBERO-100 Best Model Checkpoints]() <br>


{% include multitask_baseline.html %}