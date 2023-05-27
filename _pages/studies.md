---
title: Research Studies in LIBERO
# subtitle: 
featured_image: /assets/img/libero/whole_img.png
---

### Research Topics

{% include components/libero_features/research_topics.html %}




### Results (Highlight)

#### Knowledge Transfer


#### Effects of Algorithms


#### Effects of Architectures


#### Task Orderings

#### Pretraining Effects


### Conclusions
Our studies in LIBERO provide a lot of insights for us to study lifelong robot learning:

- The design of policy architecture is equally critical to that of lifelong learning algorithms. The transformer
architecture is better at abstracting temporal information than a recurrent neural network. Vision transformers
work well on tasks with rich visual information (e.g., a variety of objects). Convolution networks work well
when tasks mainly require the use of procedural knowledge.

-  While the lifelong learning algorithms we evaluated are effective at preventing catastrophic forgetting, they
do consistently perform on par with naive sequential fine-tuning in forward transfer.

- Our experiments show no significant benefits of using three types of pretrained language embeddings (BERT, CLIP, and GPT-2) over a
task embedding that lacks semantic information about the task.

- The most basic supervised pretraining on a rich offline dataset can have a negative impact on the learner’s
downstream performance in manipulation tasks.
